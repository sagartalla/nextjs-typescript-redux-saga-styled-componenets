// note: this file is for frontend validation only
// backend validation are handled separately

interface EmailErrorsTypes {
  email?: string;
}

interface PhoneNumberErrorsTypes {
  phoneNumber?: string;
}

interface PhoneNumberOptionalErrorsTypes {
  phoneNumberOptional?: string;
}

interface CarNumberErrorsTypes {
  carNumber?: string;
}

interface PinCodeErrorsTypes {
  pinCode?: string;
}

interface OTPErrorsTypes {
  otp?: string;
}

interface ValueInterface {
  [props: string]: any;
}

const validate = {
  name(name: string) {
    return name && name.length > 1;
  },
  email(values: ValueInterface) {
    const errors: EmailErrorsTypes = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  },
  phoneNumber(values: ValueInterface) {
    const errors: PhoneNumberErrorsTypes = {};

    if (!values.phoneNumber) {
      errors.phoneNumber = "Required";
    } else if (!/^[6-9]\d{9}$/i.test(values.phoneNumber)) {
      errors.phoneNumber = "Invalid mobile number";
    }
    return errors;
  },
  phoneNumberOptional(values: ValueInterface) {
    const errors: PhoneNumberOptionalErrorsTypes = {};
    if (!values.phoneNumberOptional) {
      return null;
    }
    if (!/^[6-9]\d{9}$/i.test(values.phoneNumberOptional)) {
      errors.phoneNumberOptional = "Invalid mobile number";
    }
    return errors;
  },
  otp(values: ValueInterface) {
    const errors: OTPErrorsTypes = {};
    if (!values.otp) {
      errors.otp = "Required";
    }
    return errors;
  },
  carNumber(values: ValueInterface) {
    // TODO API will come here
    const errors: CarNumberErrorsTypes = {};
    const carNumberRegex =
      "^(AN|AP|AR|AS|BR|CG|CH|DN|DD|DL|GA|GJ|HR|HP|JK|JS|JH|KA|KL|LD|MP|MH|MN|ML|MZ|NL|OR|OD|PB|PY|PN|RJ|SK|TN|TS|TR|UA|UK|UP|WB)( *)( *|-)( *)([0-9]{1,2})( *)( *|-)( *)([a-zA-Z]{0,3})( *)( *|-)( *)([0-9]{1,4})$";
    if (!values.carNumber) {
      errors.carNumber = "Required";
    } else if (!new RegExp(carNumberRegex, "i").test(values.carNumber)) {
      errors.carNumber = "Please enter a valid car number";
    }
    return errors;
  },
  pinCode(values: ValueInterface) {
    const errors: PinCodeErrorsTypes = {};
    const pinCodeRegex = "^[1-9][0-9]{5}$";
    if (!values.pinCode) {
      errors.pinCode = "Required";
    } else if (!new RegExp(pinCodeRegex, "i").test(values.pinCode)) {
      errors.pinCode = "Please enter a valid Pin Code";
    }
    return errors;
  },
  password(password: string) {
    return password && password.length >= 6;
  },
  // Regex to check only for numbers
  numeric(value: string) {
    const regex = /(^$)|(^\d+$)/;
    return value && regex.test(value);
  },
  url(value: string) {
    const urlRegEx =
      "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
    const validURLRegex = new RegExp(urlRegEx, "i");
    return value && validURLRegex.test(value);
  },
  /**
   * Returns true only if a value is not empty
   */
  required(val: any): boolean {
    switch (typeof val) {
      case "string":
        return !!val.trim();
      case "number":
        return Number.isFinite(val);
      default:
        return !!val;
    }
  }
};

export default validate;
