import { z } from "zod";

const datetimeLocalRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
export const UserSchema = z.object({
  name: z.string().min(1, "Nama harus diisi!"),
  address: z.string().min(1, "Alamat harus diisi!"),
  birtDate: z
    .string()
    .refine((val) => datetimeLocalRegex.test(val), "Tanggal lahir harus disi!"),
  gender: z.string().min(1, "Jenis kelamin harus pilih!"),
});
