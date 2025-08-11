import Chairman from "./chairman";
import ManagingDirector from "./managing-director";
import Principal from "./principal";
import Mission from "./mission";
import Vision from "./vision";


export default function AboutKrysalis() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto space-y-10">
      <Chairman />
      <ManagingDirector />
      <Principal />
      <Mission />
      <Vision />
     
    </div>
  );
}
