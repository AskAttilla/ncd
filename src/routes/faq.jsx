import { useLoaderData } from "react-router-dom";

export async function loader() {
    let questions = ["first", "second", "third"]

    return { questions } 
}

export default function Faq() {
    const { questions } = useLoaderData();

  return (
    <div id="faq">
        {questions?.map((question)=><p>{question}</p>)}
    </div>
  );
}
