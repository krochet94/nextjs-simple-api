import { User, UsersResponse } from "./interface";

export default async function (page: number, oldData: User[], hasMore: boolean) {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data: UsersResponse = await response.json();

      if (data.data.length === 0) {
        hasMore = false;
        return { data: oldData, hasMore, error: true };
      }

      const temp = [...oldData, ...data.data];
      const filteredData: User[] = temp.filter((value, index, self) => 
        self.findIndex(v => v.id === value.id) === index);
      
      return {data: filteredData, hasMore, error: false};
    } catch (error) {
      console.error('Error fetching users:', error);
      return { data: oldData, hasMore, error: true };
    }
  };
