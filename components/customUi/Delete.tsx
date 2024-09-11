import React from "react";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";

const Delete = () => {
  return (
    <div>
      <Button className="bg-red-1 text-white">
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Delete;
