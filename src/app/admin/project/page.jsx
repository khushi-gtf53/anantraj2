import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}



// "use client";
// import { BASE_ADMIN } from "@/config";
// import DynamicForm from "@/src/admin/components/form/DynamicForm";
// import { useApi } from "@/src/admin/hooks/useApi";
// import { useCrud } from "@/src/admin/hooks/useCrud";
// import { useParams } from "next/navigation";
// import React, { useEffect } from "react";

// const Project = () => {
//   const { id } = useParams(); 
//   const api = useApi(BASE_ADMIN);
//       if(typeof window !== 'undefined')return


//   const { editData, handleAddOrUpdate, handleEdit } = useCrud(api, "project");

//   useEffect(() => {
//     if (id) {
//       handleEdit(id); // fetch project details when editing
//     }
//   }, [id]);

//   // fetch lists
//   const { tableData: platterList } = useCrud(api, "platter");
//   const { tableData: typologyList } = useCrud(api, "typologies");
//   const { tableData: subTypologyList } = useCrud(api, "sub-typologies");

//   // map to dropdown options
//   const platterOptions =
//     platterList?.map((item) => ({
//       label: item.name, // check actual API response
//       value: item.id,
//     })) || [];

//   const typologyOptions =
//     typologyList?.map((item) => ({
//       label: item.typologies,
//       value: item.id,
//     })) || [];

//   const subTypologyOptions =
//     subTypologyList?.map((item) => ({
//       label: item.sub_typologies,
//       value: item.id,
//     })) || [];

//   // build fieldConfig dynamically
//   const fieldConfig = [
//     { type: "dropdown", name: "category_id", label: "Select Platter", options: platterOptions },
//     { type: "dropdown", name: "typologie_id", label: "Select Typology", options: typologyOptions },
//     { type: "dropdown", name: "sub_typologie_id", label: "Select Sub Typology", options: subTypologyOptions },
//     { type: "dropdown", name: "project_status", label: "Select Status", 
//         options: [{label:"Active",value:1},{label:"InActive",value:0},] },
//     { type: "text", name: "name", label: "Project Name" },
//     { type: "text", name: "address", label: "Address" },
//     { type: "text", name: "rera_no", label: "Rera No." },
//     { type: "image", name: "qr_logo", label: "Qr Image" },
//     { type: "image", name: "thumbnail", label: "Project Image" },
//     { type: "text", name: "alt", label: "Image Alt Tag" },
//     { type: "text", name: "short_description", label: "Short Description" },
//     { type: "text", name: "meta_title", label: "Meta Title" },
//     { type: "text", name: "meta_keyword", label: "Meta Keyword" },
//     { type: "text", name: "meta_description", label: "Meta Description" },
//   ];

//   return (
//     <section className={`${id ? "mr-[80px]" : ""}`}>
//       <DynamicForm
//         title={id ? "Edit Project" : "Create Project"}
//         data={fieldConfig} // pass config with dropdown options
//         onSubmit={handleAddOrUpdate}
//         defaultValues={editData} // pass pre-filled values for edit mode
//       />
//     </section>
//   );
// };

// export default Project;
