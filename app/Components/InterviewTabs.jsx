"use client"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/table";
import {Tabs, Tab} from "@nextui-org/tabs";
import { Card,CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import {userDataTestRR} from "../actions";


export default function App({childChar, childExp, childCerts, childBuzz, childClear}) {

    const [selected, setSelected] = useState("Career");
    const testCertsTwo = [
      {key: "32", cert: "sec+",}, {key: "2", cert: "CCNA",}, {key: "90", cert: "AWS",}
    ];
    const testColsTwo = [
      {key: "cert", label: "Certification"},
    ];
    
  
    return (
      <div className="flex w-full flex-col">
        <Tabs 
          aria-label="Options"         
          selectedKey={selected}
          onSelectionChange={setSelected}
          variant="bordered"
        >
          <Tab key="Career" title="Career Field">
            <Card>
              <CardBody>
                <form>
                    <Button key="notcertbutton" onPress={async ()=>userDataTestRR()}></Button>
                    {childChar}
                </form>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="Exp" title="Experience">
            <Card>
              <CardBody>
                <form>
                    {childExp}
                </form>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="Certs" title="Certifications">
            <Card>
              <CardBody>
                <form>
                    {childCerts}
                </form>
                <Table removeWrapper hideHeader aria-label="cert table">
                  <TableHeader columns={testColsTwo}>
                    {(column)=><TableColumn key={column.key}>{column.label}</TableColumn>}
                  </TableHeader>
                  <TableBody items={testCertsTwo}>
                    {(item)=>(<TableRow key={testCertsTwo.key}>
                      {(columnKey)=><TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>)}
                  </TableBody>
                </Table>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="Buzz" title="Technologies">
            <Card>
              <CardBody>
                    {childBuzz}
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="Clear" title="Clearance">
            <Card>
              <CardBody>
                <form>
                    {childClear}
                </form>
              </CardBody>
            </Card>  
          </Tab>
        </Tabs>
      </div>  
    );
  }