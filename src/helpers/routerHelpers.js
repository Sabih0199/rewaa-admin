export const APP_ROUTES = {
  DASHBOARD: "/dashboard",
  INVENTORY: "/inventory",
  POS: "/pos",
  POS_ONE: "/pos-1",
  POS_TWO: "/pos-2",
  EXPENSES: "/expenses",
  PROMOTIONS: "/promotions",
  REPORTS: "/reports",
  ORDER_MANAGEMENT: "/order-management",
  ORDER_MANAGEMENT_ONE: "/order-management-1",
  ORDER_MANAGEMENT_TWO: "/order-management-2",
  STOCK_CONTROL: "/stock-control",
  STOCK_CONTROL_ONE: "/stock-control-1",
  STOCK_CONTROL_TWO: "/stock-control-2",
  APPLICATIONS: "/Applications",
  AVAILABLE_APPS: "/available-apps",
  MY_APPS: "/my-apps",
  SETTINGS: "/Settings",
};

export const getRoute = (route, obj = {}) => {
  if (Object.keys(obj).length) {
    let objectKeys = Object.keys(obj);
    objectKeys.forEach((item) => {
      route = route.replace(new RegExp(/:([\d\w?])+/, "i"), (match) => {
        let formattedMatchedValue =
          match[match.length - 1] === "?"
            ? match.slice(1, match.length - 1)
            : match.slice(1);
        return obj[formattedMatchedValue];
      });
    });
    return route;
  }
  return route;
};
