import Customer from "./customer.model";
import { buildCustomerInfo } from "./buildCustomerInfo";
import { AuthServices } from "../../services/Auth";

export const customerAuth = async (req: any, res: any, next: any) => {
  const token: any = AuthServices.getTokenFromHeaders(req);

  if (!token) {
    req.user = null;
    return res.sendStatus(401);
  }

  const customer = await Customer.findById(token.id);

  if (!customer) {
    req.user = null;
    return res.sendStatus(401);
  }

  req.user = customer;

  return next();
};

export const getOrCreateCustomer = async (info: any, providerName: any) => {
  const customerInfo = buildCustomerInfo(info, providerName);

  try {
    const _customer: any = await Customer.findOne({
      email: customerInfo.email
    });

    const { provider, ...userInfo } = customerInfo;

    if (!_customer) {
      const customer = await Customer.create({
        ...userInfo,
        provider: [provider]
      });

      return customer;
    }

    const providerExist = _customer.provider.find(
      (el: any) =>
        el.uid === customerInfo.provider.uid &&
        el.type === customerInfo.provider.type
    );

    if (providerExist) {
      return _customer;
    }

    _customer.provider.push(customerInfo.provider);

    await _customer.save();

    return _customer;
  } catch (error) {
    throw error;
  }
};

export const me = async (userId: string) => {
  try {
    // console.log("userId ", userId);
    const user = await Customer.findById(userId);

    if (!user) {
      throw new Error("User does not exist");
    }

    return user;
  } catch (error) {
    throw error;
  }
};
