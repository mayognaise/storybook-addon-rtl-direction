export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en-US", right: "LTR", title: "English (United States)" },
        { value: "ar", right: "RTL", title: "Arabic" },
        { value: "ar-OM", right: "RTL", title: "Arabic (Oman) RTL" },
        { value: "pa-IN", right: "LTR", title: "Punjabi (India)" },
        { value: "pa-PK", right: "RTL", title: "Punjabi (Pakistan)" },
      ],
    },
  },
};

export const parameters = {
  rtlDirection: {
    autoLocales: ["ar", "pa-PK"],
    reload: true,
  },
};
