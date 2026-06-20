// import { useState } from "react"

// function Editsnippet({ShowEditSnippet,setShowEditSnippet}){
//         const [updtitle,setUpdtitle]=useState("")
//         const [updlanguage,setUpdlanguage]=useState("javascript")
//         const [upddescription,setUpddescription]=useState("")
//         const [updtags,setUpdtags]=useState("")
//         const [updcode,setUpdcode]=useState("")
//     return (
//     <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 overflow-y-auto">

//       <div className="bg-[#0F172A] text-white w-[700px] rounded-xl p-6 shadow-lg h-[80%]">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold">Edit Snippet</h2>

//           <button
//             onClick={() => setShowEditSnippet(false)}
//             className="text-gray-400 hover:text-white text-xl"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Form */}
//         <form className="flex flex-col gap-4">
//            {/* ID */}
//           <div>
//             <label className="block mb-2 font-medium">
//              Snippet ID
//             </label>

//             <input
//               type="number"
//               placeholder="Enter unique ID"
//               value={snippets.length +1} 
//               readOnly
//               className="
//               w-full
//               p-3
//               rounded-lg
//               bg-[#1E293B]
//               border
//               border-gray-700
//               focus:outline-none
//               focus:border-blue-500
//             "
//            />
//         </div>
//           {/* Title */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Title
//             </label>

//             <input
//               type="text"
//               placeholder="Enter snippet title"
//               value={updtitle}
//               onChange={(e)=>setUpdtitle(e.target.value)}
//               className="
//                 w-full
//                 p-3
//                 rounded-lg
//                 bg-[#1E293B]
//                 border
//                 border-gray-700
//                 focus:outline-none
//                 focus:border-blue-500
//               "
//             />
//           </div>

//           {/* Language */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Language
//             </label>

//             <select
//               value={updlanguage}
//               onChange={(e)=>setUpdlanguage(e.target.value)}
//               className="
//                 w-full
//                 p-3
//                 rounded-lg
//                 bg-[#1E293B]
//                 border
//                 border-gray-700
//                 focus:outline-none
//                 focus:border-blue-500
//               "
//             >
//               <option value="javascript">JavaScript</option>
//               <option value="typescript">TypeScript</option>
//               <option value="python">Python</option>
//               <option value="sql">SQL</option>
//               <option value="rust">Rust</option>
//               <option value="bash">Bash</option>
//             </select>
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Description
//             </label>

//             <textarea
//               rows="3"
//               placeholder="Enter description..."
//               value={upddescription}
//               onChange={(e)=>setUpddescription(e.target.value)}
//               className="
//                 w-full
//                 p-3
//                 rounded-lg
//                 bg-[#1E293B]
//                 border
//                 border-gray-700
//                 resize-none
//                 focus:outline-none
//                 focus:border-blue-500
//               "
//             />
//           </div>

//           {/* Tags */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Tags [Use commas to separate tags]
//             </label>

//             <input
//               type="text"
//               placeholder="#array, #sorting, #database"
//               value={updtags}
//               onChange={(e)=>setUpdtags(e.target.value)}
//               className="
//                 w-full
//                 p-3
//                 rounded-lg
//                 bg-[#1E293B]
//                 border
//                 border-gray-700
//                 focus:outline-none
//                 focus:border-blue-500
//               "
//             />
//           </div>

//           {/* Code */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Code
//             </label>

//             <textarea
//               rows="8"
//               placeholder="Paste your code here..."
//               value={updcode}
//               onChange={(e)=>setUpdcode(e.target.value)}
//               className="
//                 w-full
//                 p-3
//                 rounded-lg
//                 bg-black
//                 border
//                 border-gray-700
//                 font-mono
//                 resize-none
//                 focus:outline-none
//                 focus:border-blue-500
//               "
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end gap-3 mt-2">

//             <button
//               type="button"
//               onClick={() => setShowEditSnippet(false)}
//               className="
//                 px-4
//                 py-2
//                 rounded-lg
//                 bg-gray-700
//                 hover:bg-gray-600
//               "
//             >
//               Cancel
//             </button>

//             <button
//               type="button"
//               onClick={(e)=>{e.preventDefault()
//                             if(language.replaceAll(" ","")=="" || title.replaceAll(" ","")=="" || tags.replaceAll(" ","")=="" || code.replaceAll(" ","")=="")
//                             setShowCreateModal(true)
//                             else{
//                             setShowCreateModal(false)
//                             AddSnippetToDashboard(snippets.length +1,language,title,description,tags,code)
//               }
//               }
//               }
//               className="
//                 px-4
//                 py-2
//                 rounded-lg
//                 bg-blue-600
//                 hover:bg-blue-700
//               "
//             >
//               Edit Snippet
//             </button>

//           </div>

//         </form>

//       </div>

//     </div>
//   )
// }

// export default Editsnippet;
