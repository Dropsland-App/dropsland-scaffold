import React, { useState } from "react";
import { CreateTokenForm } from "./CreateTokenForm";
import { Button } from "./ui/button.tsx";

export const CreateFungibleTokenButton: React.FC = () => {
  const [showCreateTokenForm, setShowCreateTokenForm] = useState(false);

  return (
    <>
      <Button onClick={() => setShowCreateTokenForm(true)}>
        Create Your Token
      </Button>

      <CreateTokenForm
        visible={showCreateTokenForm}
        onClose={() => {
          setShowCreateTokenForm(false);
        }}
      />
    </>
  );
};

export default CreateFungibleTokenButton;
