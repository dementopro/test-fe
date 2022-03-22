import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Table,
  Tag,
  Input,
  Col,
  Row,
  Space,
  Checkbox,
} from 'antd'
import { getAllTransactions, updateDatabase } from '../../redux/modules/transaction/actions'
import { transactionListSelector } from '../../redux/modules/transaction/selectors'

const Transactions = () => {
  const dispatch = useDispatch()
  const transactions = useSelector(transactionListSelector)
  const [tableData, setTableData] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [bezosAmount, setBezosAmount] = useState(0)

  const columns = [
    {
      title: 'Id',
      key: 'id',
      render: (id: any, record: any, index: any) => {
        return {
          props: {
            style: { background: record.is_selected && 'lightblue' }
          },
          children: <div>{index + 1}</div>
        }
      }
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: any, record: any) => {
        return {
          props: {
            style: { background: record.is_selected && 'lightblue' }
          },
          children: <div>$ {amount}</div>
        }
      }
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (categories: any, record: any) => {
        return {
          props: {
            style: { background: record.is_selected && 'lightblue' }
          },
          children: (
            <>
              {categories.map((category: any, index: any) => {
                let color = categories.length >= 3 ? 'geekblue' : 'green'

                return (
                  <Tag color={color} key={index}>
                    {category}
                  </Tag>
                )
              })}
            </>
          )
        }
      }
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: any, record: any) => {
        return {
          props: {
            style: { background: record.is_selected && 'lightblue' }
          },
          children: <div>{date}</div>
        }
      }
    },
    {
      title: 'Merchant Name',
      dataIndex: 'merchant_name',
      key: 'merchant_name',
      render: (merchant_name: any, record: any) => {
        return {
          props: {
            style: { background: record.is_selected && 'lightblue' }
          },
          children: <div>{merchant_name}</div>
        }
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => {
        return {
          props: {
            style: { background: record.is_selected && 'lightblue' }
          },
          children: <Checkbox onChange={handleChange(record)} checked={record.is_selected} />
        }
      }
    }
  ]

  useEffect(() => {
    setInterval(() => {
      dispatch(getAllTransactions())
    }, 10000)
  }, [dispatch])

  useEffect(() => {
    setTableData(transactions.map((item: any, index: any) => {
      return {
        ...item,
        key: index + 1,
      }
    }))
  }, [transactions])

  const handleChange = (record: any) => () => {
    setTableData((prev: any) => prev.map((item: any) => {
      return {
        ...item,
        is_selected: record.merchant_name === item.merchant_name ? !item.is_selected : item.is_selected
      }
    }))
  }

  useEffect(() => {
    let totalSum = 0
    let bezosSum = 0

    tableData.map((item: any) => {
      totalSum += item.amount
      bezosSum += item.is_selected && item.amount
    })
    setTotalAmount(totalSum)
    setBezosAmount(bezosSum)

    tableData.length > 0 && dispatch(updateDatabase({
      body: tableData
    }))
  }, [tableData])

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Input.Group size="large">
        <Row gutter={8}>
          <Col span={8}>
            Total Transaction Amount:
            <Input value={`$ ${totalAmount}`} />
          </Col>
          <Col span={8}>
            Percentage of Bezos Related Companies:
            <Input value={`${(bezosAmount / totalAmount * 100).toFixed(2)}%`} />
          </Col>
        </Row>
      </Input.Group>

      <Table columns={columns} dataSource={tableData} />
    </Space>
  )
}

export default Transactions
