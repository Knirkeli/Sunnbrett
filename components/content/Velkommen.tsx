import { velkommenPost } from "../../app/interface";
import { client } from "../../sanity/lib/client";
import { Card, CardContent } from "../ui/card";

// async function getData() {
//   const query = `*[_type == "post" && title == "Velkommen til oss"]{
//     _id,
//     title,
//     "text": body[0].children[0].text
//   }`;

//   const data = await client.fetch(query);
//   return data;
// }

async function getData() {
  const query = `*[_type == "post" && title == "Velkommen til oss"]{
    _id,
    title,
    body[]{
      ...,
      children[]{
        ...
      },
      markDefs[]{
        ...
      }
    }
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Velkommen() {
  const data: velkommenPost[] = await getData();

  console.log(data);

  //   return (
  //     <div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
  //       {data.map((post, idx) => (
  //         <Card key={idx}>
  //           <CardContent className="mt-5">
  //             <h3>{post.title}</h3>
  //             {post.body.map((block, blockIdx) => (
  //               <div key={blockIdx}>
  //                 {block.children.map((child, childIdx) => {
  //                   const link = block.markDefs.find(
  //                     (def) => def._key === child.marks[0]
  //                   );
  //                   return link && link._type === "link" ? (
  //                     <a
  //                       key={childIdx}
  //                       href={link.href}
  //                       target="_blank"
  //                       rel="noopener noreferrer"
  //                     >
  //                       {child.text}
  //                     </a>
  //                   ) : (
  //                     <p key={childIdx}>{child.text}</p>
  //                   );
  //                 })}
  //               </div>
  //             ))}
  //           </CardContent>
  //         </Card>
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
      {data.map((post, idx) => (
        <Card key={idx} className="w-11/12 mx-auto mb-5">
          <CardContent className="mt-5 p-4 rounded shadow-xl">
            <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
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
  );
}
