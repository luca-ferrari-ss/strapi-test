export async function seedAdmin(): Promise<void> {
  await strapi.admin.services.role.createRolesIfNoneExist();
  const superAdminRole = await strapi.db
    .query("admin::role")
    .findOne({ where: { code: "strapi-super-admin" } });
  const superAdmin = await strapi.db
    .query("admin::user")
    .findOne({ where: { username: "master" } });
  if (!superAdmin) {
    console.log("Starting seedAdmin");
    const params = {
      username: "master",
      email: "master@sombrerostudio.com",
      blocked: false,
      isActive: true,
      confirmed: true,
      password: null,
      roles: null,
    };
    params.password = await strapi.admin.services.auth.hashPassword(
      "Mexican123"
    );
    params.roles = [superAdminRole.id];
    await strapi.db.query("admin::user").create({
      data: { ...params },
      populate: ["roles"],
    });
    console.log("Ending seedAdmin");
  } else {
    console.log("Skipping seedAdmin");
  }
}
