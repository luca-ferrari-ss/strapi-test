import { Strapi } from "@strapi/types";
import { statSync } from "fs";

const uploadFile = async (
  strapi: Required<Strapi>,
  file: { path: any; name: any; type: any }
) => {
  const { name, path, type } = file;

  const fileStat = statSync(path);

  const [uploadedFile] = await strapi.plugins.upload.services.upload.upload({
    data: {},
    files: {
      path,
      name,
      type,
      size: fileStat.size,
    },
  });

  return uploadedFile;
};

export async function seedUpload(): Promise<Object> {
  const check = await strapi.db.query("plugin::upload.file").findMany();
  if (check.length != 0) {
    console.log("Skipping seedUpload");
  } else {
    console.log("Starting seedUpload");

    const placeholderAvatarFile = {
      path: "/opt/app/public/img/avatar.jpg",
      name: "avatar.jpg",
      type: "image/jpg",
    };

    const placeholderImageFile = {
      path: "/opt/app/public/img/placeholder.png",
      name: "placeholder.png",
      type: "image/png",
    };

    const placeholderVideoFile = {
      path: "/opt/app/public/video/video.mp4",
      name: "video.mp4",
      type: "video/mp4",
    };

    const placeholderPdfFile = {
      path: "/opt/app/public/file/blank.pdf",
      name: "blank.pdf",
      type: "application/pdf",
    };

    let placeholderAvatarId = (await uploadFile(strapi, placeholderAvatarFile)).id;

    let placeholderImageId = (await uploadFile(strapi, placeholderImageFile)).id;

    let placeholderVideoId = (await uploadFile(strapi, placeholderVideoFile))
      .id;

    let placeholderPdfId = (await uploadFile(strapi, placeholderPdfFile)).id;

    console.log("Ending seedUpload");

    return {
      placeholderAvatar: placeholderAvatarId,
      placeholderImage: placeholderImageId,
      placeholderVideo: placeholderVideoId,
      placeholderPdf: placeholderPdfId
    };
  }
}
