import React, { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, X, PackagePlus } from "lucide-react";
import toast from "react-hot-toast";
import { Field, Input, Textarea } from "../../../components/ui/Field";
import Button from "../../../components/ui/Button";
import { useForm } from "react-hook-form";

const categories = [
  "Laboratory Instruments",
  "Lab Glassware",
  "Chemistry Equipment",
  "Measuring Equipment",
  "Microscopy",
  "Safety Equipment",
  "Lab Accessories",
];

const AddProduct = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: { productName: "", productCategory: "", productPrice: "", discountPrice: "", stock: 0, status: "Active", featured: false, productDescription: "" },
  });

  const submitHandler = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.append(key, value));
      files.forEach((file) => formData.append("productImg", file));

      const response = await fetch(`${import.meta.env.VITE_BACK_URL}/products/add`, { method: "POST", body: formData, credentials: "include" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Product not added");
      toast.success("Product added successfully");
      reset();
      setFiles([]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8"><span className="text-xs font-bold uppercase tracking-widest2 text-gold-400">Catalog</span><h1 className="text-2xl sm:text-3xl font-black text-white mt-2">Add Laboratory Product</h1></div>
      <motion.form onSubmit={handleSubmit(submitHandler)} encType="multipart/form-data" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-white/10 bg-ink-900/50 p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Product Name">
            <Input placeholder="Digital pH Meter Pro" {...register("productName", { required: "Product name is required" })} />
            {errors.productName && <p className="text-red-400 text-sm mt-1">{errors.productName.message}</p>}
          </Field>
          <Field label="Category">
            <select className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-white" {...register("productCategory", { required: "Category is required" })}>
              <option value="">Select category</option>
              {categories.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
          </Field>
          <Field label="Price"><Input type="number" min="0" placeholder="4500" {...register("productPrice", { required: true, valueAsNumber: true })} /></Field>
          <Field label="Discount Price"><Input type="number" min="0" placeholder="3999" {...register("discountPrice", { valueAsNumber: true })} /></Field>
          <Field label="Stock"><Input type="number" min="0" placeholder="25" {...register("stock", { valueAsNumber: true })} /></Field>
          <Field label="Status">
            <select className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-white" {...register("status")}>
              <option value="Active">Active</option><option value="Out of Stock">Out of Stock</option><option value="Hidden">Hidden</option>
            </select>
          </Field>
          <Field label="Featured">
            <label className="flex items-center gap-3 text-white mt-3"><input type="checkbox" {...register("featured")} /> Show as featured</label>
          </Field>
        </div>

        <Field label="Product Description">
          <Textarea rows={5} placeholder="Describe the product, accuracy, use case and important details..." {...register("productDescription", { required: "Description is required" })} />
          {errors.productDescription && <p className="text-red-400 text-sm mt-1">{errors.productDescription.message}</p>}
        </Field>

        <Field label="Product Images">
          <label className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-white/10 rounded-xl py-10 cursor-pointer hover:border-gold-400/50 transition">
            <UploadCloud className="w-8 h-8 text-gold-400" />
            <span className="text-ink-300">Upload product images</span>
            <span className="text-xs text-ink-500">PNG, JPG, WEBP</span>
            <input type="file" multiple accept="image/*" onChange={(e) => setFiles(Array.from(e.target.files || []))} className="hidden" />
          </label>
          {files.length > 0 && <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-3">{files.map((file, index) => <div key={index} className="relative overflow-hidden rounded-lg border border-white/10"><img src={URL.createObjectURL(file)} alt="" className="h-24 w-full object-contain bg-ink-800" /><button type="button" onClick={() => setFiles((prev) => prev.filter((_, i) => i !== index))} className="absolute top-1 right-1 bg-black/70 rounded-full p-1"><X className="w-4 h-4 text-white" /></button></div>)}</div>}
        </Field>

        <Button type="submit" variant="gold" size="lg" loading={loading} icon={PackagePlus} className="w-full md:w-auto">Add Product</Button>
      </motion.form>
    </div>
  );
};

export default AddProduct;
