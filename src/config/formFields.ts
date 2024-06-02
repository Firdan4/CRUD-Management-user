interface FormFieldConfig {
  name: "name" | "address" | "birtDate" | "gender";
  label: string;
  type: string;
}

export const formFields: FormFieldConfig[] = [
  { name: "name", label: "Nama", type: "text" },
  { name: "address", label: "Alamat", type: "text" },
  { name: "birtDate", label: "Tanggal Lahir", type: "datetime-local" },
  //   { name: "gender", label: "Jenis Kelamin",  },
];
