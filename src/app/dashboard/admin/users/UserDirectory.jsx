"use client"
import { Button, Chip, Table } from '@heroui/react';
import React from 'react';
import DeleteUser from './DeleteUser';
import SuspendUser from './SuspendUser';

const UserDirectory = ({users}) => {
    return (
        <div>
           <Table>
             <Table.ScrollContainer>
               <Table.Content
                 aria-label="Recent System Activity"
                 className="min-w-full"
               >
                 <Table.Header>
                   <Table.Column isRowHeader>Identity Node</Table.Column>
                   <Table.Column>EMAIL</Table.Column>
                   <Table.Column>ROLE DESTINATION</Table.Column>
                   <Table.Column>STATUS BADGE</Table.Column>
                   <Table.Column className="text-center">
                     Action
                   </Table.Column>
                 </Table.Header>
           
                 <Table.Body>
                   {users?.map((user) => (
                     <Table.Row key={user._id}>
                       <Table.Cell>
                         {user.name}
                       </Table.Cell>
           
                       <Table.Cell>{user.email}</Table.Cell>
           
                       <Table.Cell>
  <Chip
    variant="flat"
    className={`capitalize font-semibold px-2 ${
      user.role === "admin"
        ? "bg-slate-100 text-cyan-700"
        : user.role === "doctor"
        ? "bg-blue-100 text-blue-700"
        : user.role === "patient"
        ? "bg-purple-100 text-purple-700"
        : "bg-gray-100 text-gray-700"
    }`}
  >
    {user.role}
  </Chip>
</Table.Cell>
<Table.Cell>
  <Chip
    className={`text-center font-semibold capitalize ${
      user.status === "Active"
        ? "bg-green-100 text-green-700"
        : user.status === "Suspended"
        ? "bg-red-100 text-red-700"
        : user.status === "pending"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-gray-100 text-gray-700"
    }`}
  >
    {user.status}
  </Chip>
</Table.Cell>

<Table.Cell>
  {user.role !== "admin" && (
    <div className="flex justify-center gap-3">
      <SuspendUser user={user}/>

      <DeleteUser user={user}/>
    </div>
  )}
</Table.Cell>
                     </Table.Row>
                   ))}
                 </Table.Body>
               </Table.Content>
             </Table.ScrollContainer>
           </Table> 
        </div>
    );
};

export default UserDirectory;