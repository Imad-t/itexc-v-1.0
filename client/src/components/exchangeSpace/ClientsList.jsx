import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Box,
  Flex,
} from "@chakra-ui/react";
import { clients } from "../../data/clientsList";
import styles from "../../styles/exchangeSpace/ClientsList.module.scss";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ClientsList = () => {
  const [search, setSearch] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredClients = search
    ? clients.filter(
        (client) =>
          client.fullName.toLowerCase().includes(search.toLowerCase()) ||
          client.city.toLowerCase().includes(search.toLowerCase())
      )
    : clients;

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedClients = filteredClients.sort((a, b) => {
    if (sortColumn === "name") {
      return sortOrder === "asc"
        ? a.fullName.localeCompare(b.fullName)
        : b.fullName.localeCompare(a.fullName);
    }
    if (sortColumn === "city") {
      return sortOrder === "asc"
        ? a.city.localeCompare(b.city)
        : b.city.localeCompare(a.city);
    }
    if (sortColumn === "orders") {
      return sortOrder === "asc"
        ? a.numberOfOrders - b.numberOfOrders
        : b.numberOfOrders - a.numberOfOrders;
    }
    if (sortColumn === "transactions") {
      return sortOrder === "asc"
        ? a.totalTransactions - b.totalTransactions
        : b.totalTransactions - a.totalTransactions;
    }
    return 0;
  });

  return (
    <div className={styles.clientsList}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {filteredClients.length === 0 ? (
        <p className={styles.noResultsMessage}>No clients found.</p>
      ) : (
        <TableContainer className={styles.Container}>
          <Table variant="striped" className={styles.Table}>
            <Thead className={styles.Thead}>
              <Tr className={styles.Tr}>
                <Th className={styles.Th}>
                  <Flex justifyContent={"center"} alignItems="center" >
                    Name
                    <Box _hover={{backgroundColor: "lightgray", borderRadius: "4px"}}>
                      <ChevronDownIcon onClick={() => handleSort("name")} color= "black" boxSize={6}/>
                    </Box>
                  </Flex>
                </Th>
                <Th className={styles.Th}>
                  <Flex justifyContent={"center"} alignItems="center" >
                    City
                    <Box _hover={{backgroundColor: "lightgray", borderRadius: "4px"}}>
                      <ChevronDownIcon onClick={() => handleSort("city")} color= "black" boxSize={6}/>
                    </Box>
                  </Flex>
                </Th>
                <Th className={styles.Th}>
                  <Flex justifyContent={"center"} alignItems="center" >
                    Orders
                    <Box _hover={{backgroundColor: "lightgray", borderRadius: "4px"}}>
                      <ChevronDownIcon onClick={() => handleSort("orders")} color= "black" boxSize={6}/>
                    </Box>
                  </Flex>
                </Th>
                <Th className={styles.Th}>
                  <Flex justifyContent={"center"} alignItems="center" >
                    Total Transactions
                    <Box _hover={{backgroundColor: "lightgray", borderRadius: "4px"}}>
                      <ChevronDownIcon onClick={() => handleSort("transactions")} color= "black" boxSize={6}/>
                    </Box>
                  </Flex>
                </Th>
              </Tr>
            </Thead>
            <Tbody className={styles.Tbody}>
              {sortedClients.map((client) => (
                <Tr className={styles.Tr} key={client.id}>
                  <Td className={styles.Td}>{client.fullName}</Td>
                  <Td className={styles.Td}>{client.city}</Td>
                  <Td className={styles.Td}>{client.numberOfOrders}</Td>
                  <Td className={styles.Td}>{client.totalTransactions} dzd</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default ClientsList;
