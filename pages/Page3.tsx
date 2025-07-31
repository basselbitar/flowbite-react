"use client";

import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { ExampleAdditionalContent } from "./ExampleAdditionalContent";

export default function Page3() {
  return (
    <>
    <div>Page3 - Alert</div>
    <Alert color="info">
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
    <br />
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
    <hr />
    <h2 className="py-5"> This is a dismissible alert </h2>
    <Alert 
    color="success"
    onDismiss={() => alert('Alert dismissed!')}
    >
      <span className="font-medium">Info alert!</span> You can dismiss this Alert by clicking the X.
    </Alert>

    <h2 className="py-5"> This is a rounded alert </h2>
    <Alert color="warning" rounded>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>

    <h2 className="py-5"> This is an alert with border accent </h2>
    <Alert color="warning" withBorderAccent>
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </span>
    </Alert>

    <h2 className="py-5"> This is an alert with additional context </h2>

     <Alert additionalContent={<ExampleAdditionalContent />} color="warning" icon={HiInformationCircle}>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>

    <h2 className="py-5"> This is an alert with All Options </h2>

     <Alert
      color="success"
      
      onDismiss={() => alert('Alert dismissed!')}
    
    >
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
    </>
  )
}
