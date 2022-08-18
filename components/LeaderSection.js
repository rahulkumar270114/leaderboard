import styles from './LeaderSection.module.css';
import {useState} from 'react';
import ReactPaginate from "react-paginate";

const LeaderSection = ({leaders}) => {

// const [users, setUsers] = useState(leaders.slice(0, 50));
const [users, setUsers] = useState(leaders);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  console.log('users', users);

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, idx) => {
        console.log('image', user.image)
      return (
        <tr key={`${user._id}_${idx}`}>
            <td>{idx + pagesVisited + 1}</td>
            <td><img src={user?.toUser?.image ? user?.toUser?.image : '/static/images/person.png'} width="30"/> <span>{user?.toUser?.name}</span></td>
            <td>{user?.points}</td>
        </tr>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={styles['leader']}>
        {leaders.length ? 
        <>
            <div className={styles['leader-section']}>
                <table className={styles['leader-table']}>
                    <tr>
                    <th>S No.</th>
                    <th>Gratitude Champions</th>
                    <th className={styles['dumpling-col']}><span>Total</span> <img src='/static/images/dumpling.png'/></th>
                    </tr>
                        {displayUsers}
                </table>
            </div>
            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </> :
        <p>Opps!! No Leaders Found</p>
        }
      </div>
  );
}

export default LeaderSection