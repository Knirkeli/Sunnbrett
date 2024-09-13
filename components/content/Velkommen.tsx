// import { velkommenPost } from "../../app/interface";
// import { getData } from "../Fetch/FetchVelkommen";
// import { Card, CardContent } from "../ui/card";

// export default async function Velkommen() {
//   const data: velkommenPost[] = await getData();
//   return (
//     <div className="w-full flex justify-center px-5">
//       <div className="w-full max-w-4xl">
//         {data.map((post, idx) => (
//           <Card key={idx} className="mb-5">
//             <CardContent className="mx-auto my-auto p-4 rounded shadow-xl">
//               <h3 className="text-2xl font-bold mb-4 text-center">
//                 {post.title}
//               </h3>
//               {post.body.map((block, blockIdx) => (
//                 <div key={blockIdx}>
//                   {block.children.map((child, childIdx) => {
//                     const link = block.markDefs.find(
//                       (def) => def._key === child.marks[0]
//                     );
//                     return link && link._type === "link" ? (
//                       <a
//                         key={childIdx}
//                         href={link.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-500 underline"
//                       >
//                         {child.text}
//                       </a>
//                     ) : (
//                       <p key={childIdx} className="text-base mb-2">
//                         {child.text}
//                       </p>
//                     );
//                   })}
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

import { velkommenPost } from "../../app/interface";
import { useFetchPosts } from "../Fetch/FetchVelkommen";
import { Card, CardContent } from "../ui/card";

export default function Velkommen() {
  const posts = useFetchPosts();

  return (
    <div className="w-full flex justify-center px-5">
      <div className="w-full max-w-4xl">
        {posts.map((post, idx) => (
          <Card key={idx} className="mb-5 border-none shadow-none">
            <CardContent className="mx-auto my-auto p-4 rounded border-none">
              <h3 className="text-2xl font-bold mb-4 text-center">
                {post.title}
              </h3>
              {post.body.map((block, blockIdx) => (
                <div key={blockIdx}>
                  {block.children.map((child, childIdx) => {
                    const link = block.markDefs.find(
                      (def) => def._key === child.marks[0]
                    );
                    return link && link._type === "link" ? (
                      <a
                        key={childIdx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {child.text}
                      </a>
                    ) : (
                      <p key={childIdx} className="text-base mb-2">
                        {child.text}
                      </p>
                    );
                  })}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
