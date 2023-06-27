export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  
export type UsersResponse = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
  };

  export type UserProps = {
    users: User[],
    hasMore: boolean,
    handleLoadMore: () => Promise<DataResponse>;
  };

  export type DataResponse = {
    data: User[],
    hasMore: boolean,
    error: boolean
  }