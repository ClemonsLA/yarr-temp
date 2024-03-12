"use client"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import {Button} from "@nextui-org/button"
import {useFormState} from 'react-dom'
import React from "react";
import {handleCertFormAction} from "../actions";
import {Autocomplete, AutocompleteItem} from "@nextui-org/autocomplete";


const certs = [
  {value:"comptiaSec+", name: "sec+", label: "Sec +", vendor: "CompTIA"},
  {value:"ciscoCcna", name: "ccna", label: "CCNA", vendor: "Cisco"},
  {value:"awsCcp", name: "ccp", label: "CCP", vendor: "AWS"},
]
export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [certValue, setCertValue] = React.useState('choosing');
  const [selectedKey, setSelectedKey] = React.useState(null);

  
  const initState = {
    name: 'This',
    value: 'sucks',
  }
  const [formState, setFormState] = useFormState(handleCertFormAction, initState)

  const onSelectionChange = (id) => {
    setSelectedKey(id);
  };
  
  const onInputChange = (certValue) => {
    setCertValue(certValue)
  };


  const setModalState = (isOpen) => {
    onOpenChange(isOpen);
    setFormState(certValue)

  }


  return (
    <>
    <form action={setFormState}>
      <Button onPress={onOpen}>+</Button>
      <Modal isOpen={isOpen} onOpenChange={setModalState} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                <ModalBody>
                    
                        <Autocomplete 
                        allowsCustomValue
                        label="Search an animal" 
                        variant="bordered"
                        className="max-w-xs" 
                        defaultItems={certs}
                        onSelectionChange={onSelectionChange}
                        onInputChange={onInputChange}
                        >
                        {(item) => <AutocompleteItem key={item.value} name="cert" id={item.value} value={item.value}>{item.label}</AutocompleteItem>}

                        </Autocomplete>
                    
                </ModalBody>
              <ModalFooter>
                <Button key="certCancel" color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button key="certAccept" color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </form>
    </>
  );
}
