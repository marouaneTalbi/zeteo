import React from "react";

const sizeClasses = {
  txtJostRegular16WhiteA700: "font-jost font-normal",
  txtDosisMedium14: "font-dosis font-medium",
  txtIcofont14WhiteA700: "font-icofont font-normal",
  txtDosisSemiBold24: "font-dosis font-semibold",
  txtJostRegular18Lightblue400: "font-jost font-normal",
  txtDosisBold32: "font-bold font-dosis",
  txtDosisMedium14WhiteA700: "font-dosis font-medium",
  txtJostRomanRegular15: "font-jost font-normal",
  txtDosisRegular24: "font-dosis font-normal",
  txtJostRomanRegular16: "font-jost font-normal",
  txtMontserratMedium16: "font-medium font-montserrat",
  txtJostBold14: "font-bold font-jost",
  txtDosisMedium24: "font-dosis font-medium",
  txtJostRegular18: "font-jost font-normal",
  txtJostRegular14WhiteA700: "font-jost font-normal",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtJostRegular16: "font-jost font-normal",
  txtOpenSansRomanRegular18: "font-normal font-opensans",
  txtJostRegular13: "font-jost font-normal",
  txtRubikRegular18: "font-normal font-rubik",
  txtJostRegular14: "font-jost font-normal",
  txtIcofont14: "font-icofont font-normal",
  txtDosisSemiBold30: "font-dosis font-semibold",
  txtDosisSemiBold52: "font-dosis font-semibold",
  txtIcofont12: "font-icofont font-normal",
  txtJostRegular14Bluegray300: "font-jost font-normal",
  txtJostRomanRegular15Lightblue400: "font-jost font-normal",
  txtDosisSemiBold18: "font-dosis font-semibold",
  txtDosisRegular14: "font-dosis font-normal",
  txtDosisSemiBold16: "font-dosis font-semibold",
  txtDosisRegular15: "font-dosis font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
