export const ImageUploader = async (file: any) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", file.name);
  const cloudName = "deiyompy0";
  const res = await fetch(`https://api.cloudinary.com/v1_1/v1_1/${cloudName}/upload`, {
    method: "POST",
    body: data,
  });
  return await res.json();
};
