import type { User, DataResponse } from '../interface';
import Users from './users';
import fetchUsers from '../fetch-data';

let data: User[] = [];
let hasMore: boolean = true;
let page: number = 1;

const UsersPage = async () => {
    // onload initial values
    data = [];
    hasMore = true;
    page = 1;

    const initialData: DataResponse = (await fetchUsers(page, data, hasMore))!;
    
    page++;
    hasMore = initialData?.hasMore;
    data = initialData?.data;
    if (initialData?.error) window.alert('Error fetching users');

    
    async function handleLoadMore () {
        'use server';
        const resData: DataResponse = (await fetchUsers(page, data, hasMore))!;
        page++;
        hasMore = resData?.hasMore;
        data = resData?.data;
        return resData;
    };

  return <Users users={data} hasMore={hasMore} handleLoadMore={handleLoadMore} />;
};

export default UsersPage;
