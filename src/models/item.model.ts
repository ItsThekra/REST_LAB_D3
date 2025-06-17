{/*
  This file importants for more than one thing:
  1- using specific interface , it meants we determine the structure and types of the data
  2- integration with database , (models) it's the connection point between the database and the server
  */}

export interface Item {
  id: string;
  listId: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
