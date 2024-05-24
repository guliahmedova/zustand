import { useEffect } from 'react';
import useUsersStore from '../app/usersStore';

const Users = () => {
    const { data, loading, error, fetchData } = useUsersStore((state: any) => ({
        data: state.data,
        loading: state.loading,
        error: state.error,
        fetchData: state.fetchData
    }));

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No Data</div>;

    return (
        <div>
            <h1>Fetched Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Users;
