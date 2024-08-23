export async function seedLocale(): Promise<void> {
    const enLocale = await strapi.service('plugin::i18n.locales').findById(2);

    if (enLocale === null) {
        console.log("Starting seedLocale")
        await strapi.service('plugin::i18n.locales').create({
            id: 2,
            name: 'English (en)',
            code: 'en',
        });
        console.log("Ending seedLocale")
    } else{
        console.log("Skipping seedLocale")
    }
}