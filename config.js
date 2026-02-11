const config = {
  appName: "Moving to China",
  appDescription:
    "Information and guides for US citizens interested in moving to China. Visa types, cost of living, teaching English, WeChat Pay, property, scholarships, and more.",
  domainName: "movingtochina.com",
  crisp: {
    id: "",
    onlyShowOnRoutes: ["/"],
  },
  resend: {
    fromNoReply: `Moving to China <noreply@movingtochina.com>`,
    fromAdmin: `Moving to China <info@movingtochina.com>`,
    supportEmail: "info@movingtochina.com",
  },
  colors: {
    theme: "light",
    main: "#c41e3a", // Chinese red accent
  },
};

export default config;
