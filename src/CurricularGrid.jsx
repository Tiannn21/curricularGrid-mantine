import { Container, Table, Title } from "@mantine/core";
import { subjects }  from './mocks/signatures.json'

export function CurricularGrid() {


    const tableRows = subjects.map((subject) => (
        <Table.Tr key={subject.name}>
            <Table.Td>{subject.name}</Table.Td>
        </Table.Tr>
    ))

    const tableHead = (
        <Table.Tr>
            <Table.Th>1° Semestre</Table.Th>
            <Table.Th>2° Semestre</Table.Th>
            <Table.Th>3° Semestre</Table.Th>
            <Table.Th>4° Semestre</Table.Th>
            <Table.Th>5° Semestre</Table.Th>
            <Table.Th>6° Semestre</Table.Th>
            <Table.Th>7° Semestre</Table.Th>
            <Table.Th>8° Semestre</Table.Th>
            <Table.Th>9° Semestre</Table.Th>
            <Table.Th>10° Semestre</Table.Th>
            <Table.Th>11° Semestre</Table.Th>
        </Table.Tr>
    )


    return (
        <Container>
            <Title ta="center">Malla Curricular ICINF 2020</Title>
            <Table striped withTableBorder withColumnBorders >
                <Table.Thead>{tableHead}</Table.Thead>
                <Table.Tbody>{tableRows}</Table.Tbody>
            </Table>
        </Container>
    )
}