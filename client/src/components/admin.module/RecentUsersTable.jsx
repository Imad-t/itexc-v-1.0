import React, { useMemo, useState } from 'react';
import { useTable, useGlobalFilter , usePagination ,useSortBy  } from 'react-table';
import styles from '../../styles/AdminDashboard.module.scss';
import { data } from '../../data/UsersData';
import { closeOutline} from 'ionicons/icons';
import { color } from 'framer-motion';
import { Link } from 'react-router-dom';
import AddUserForm from './AddUserForm';
import { Avatar } from '@chakra-ui/react';
function UsersTable() {
  const [usersData, setUsersData] = useState(data);

  const deleteUser = (id) => {
    setUsersData((prevData) => prevData.filter((user) => user.id !== id));
  };

  const changeUserType = (id, type) => {
    setUsersData((prevData) =>
      prevData.map((user) =>
        user.id === id ? { ...user, type: type } : user
      )
    );
  };

  const getTypeStyle =(type)=>{
    switch (type) {
      case 'admin':
        return 'admin';
      case 'customer':
        return 'customer';
      case 'store':
        return 'store';
      case 'wholesaler':
        return 'wholesaler';
      default:
        return 'black';
    }
  }
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        Cell: ({ row }) => (
          <div style={{ textAlign: 'center'}}>
            <Link to={`/users/${row.original.id}`} key={row.original.id}>
              {row.original.id}
            </Link>
          </div>
        ),
      },
      {
        Header:"Avatar",
        accessor:'avatar',
        Cell: ({ row }) => (
          <div className={styles['avatar']}>

          <div style={{ textAlign: 'center'}}>
          <Link to={`/users/${row.original.id}`} key={row.original.id}>
          <Avatar name={row.original.firstName} src={row.original.avatar} size='sm'  />
          </Link>
          </div>
          </div>
        ),
      },
      {
        Header: 'Name',
        accessor: 'firstName',
        Cell: ({ row }) => (
          <div style={{ textAlign: 'center'}}>
            <Link to={`/users/${row.original.id}`} key={row.original.id}>
              {row.original.firstName} {row.original.lastName}
            </Link>
          </div>
        ),
      },
      {
        Header: 'Type',
        accessor: 'type',
        Cell: ({ row }) => (
          <div className={styles['type']}>
          <div className={styles[getTypeStyle(row.original.type)]}>
            <select
              value={row.original.type}
              onChange={(e) => changeUserType(row.original.id, e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
              <option value="store">Store</option>
              <option value="wholesaler">Wholesaler</option>
            </select>
          </div>
          </div>
        ),
      },
      
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <div style={{textAlign:'center' ,color:'red' ,fontSize:'20px' ,fontWeight:'bold'}}>
            <button onClick={() => deleteUser(row.original.id)}><ion-icon s icon={closeOutline}></ion-icon>
            </button>
          </div>
        ),
      },
    ],
    []
  );
  const tableInstance = useTable(
    {
      columns,
      data: usersData,
      initialState: { pageIndex: 0, pageSize: 10 ,sortBy: [{ id: 'id', desc: true }]}      
    },
    useGlobalFilter,
    useSortBy,
    usePagination
    );
    
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      prepareRow,
      state: { globalFilter , pageIndex ,pageSize},
      setGlobalFilter,
    } = tableInstance;
  
  const [show,setShow]=useState(false)
  function handleAddUser(){
    setShow(!show)
    console.log(show)
  }

  return (
    <div>
      <div className={styles['filter-action']}>
      <div className={styles['search-filter']}>
        <input
          type="text"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div className={styles['add-user']}>
        <button onClick={handleAddUser} >
          Add User
        </button>
      </div>
      </div>

      
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
  {page.map((row) => {
    prepareRow(row);
    return (
        <tr {...row.getRowProps()}>
          {row.cells.map((cell) => (
            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
          ))}
        </tr>
    );
  })}
</tbody>
      </table>
      <AddUserForm show={show} popup={handleAddUser}></AddUserForm>
    </div>
  );
}

export default UsersTable;
