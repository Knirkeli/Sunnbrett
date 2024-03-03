import { velkommenPost } from "../app/interface";
import { client } from "../sanity/lib/client";
import { Card, CardContent } from "./ui/card";

async function getData() {
  const query =`*[_type == "post" && title == "Velkommen til oss"]{
    _id,
    title,
    "text": body[0].children[0].text
  }`;

  const data = await client.fetch(query);
  return data;
}


export default async function Velkommen() {
  const data: velkommenPost[] = await getData();

  console.log(data);

  return (
    <div className="grid grid cols-1 lg:grid-cols-4 mt-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <CardContent className="mt-5">
            <h3>
              {post.title}
            </h3>
            <p>
              {post.text}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}