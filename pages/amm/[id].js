import React from 'react'
import axios from "axios"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import SearchBlock from "../../components/Layout/SearchBlock"
import SEO from "../../components/SEO"
import { server } from "../../utils"
import {
  lpTokenName,
  trWithAccount,
  shortHash,
  amountFormat,
  addressUsernameOrServiceLink,
  fullDateAndTime,
  fullNiceNumber
} from "../../utils/format"

import CopyButton from "../../components/UI/CopyButton"
import { useEffect, useState } from "react"

export async function getServerSideProps(context) {
  const { locale, query, req } = context;
  let initialData = null;
  const { id } = query;

  let headers = {};
  if (req.headers["x-real-ip"]) {
    headers["x-real-ip"] = req.headers["x-real-ip"]
  }
  if (req.headers["x-forwarded-for"]) {
    headers["x-forwarded-for"] = req.headers["x-forwarded-for"]
  }
  let errorMessage = null
  try {
    const res = await axios({
      method: "get",
      url: server + "/api/cors/v2/amm/" + id,
      headers,
    }).catch(error => {
      errorMessage = error.message
    });
    initialData = res?.data
  } catch (error) {
    console.error(error)
  }

  return {
    props: {
      id,
      data: initialData,
      errorMessage,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}

export default function Amm(
  { id, data, errorMessage },
) {
  const { t } = useTranslation()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const lpToken = lpTokenName(data)

  const showPercents = (value) => {
    value = value ? (value / 1000) : "0"
    return value + "%"
  }

  return (
    <>
      <SEO
        page="AMM"
        title={
          t("explorer.header.amm") + " "
          + lpToken + " "
          + (data?.ammID || id)
        }
        description={
          "Automated market maker pool details for "
          + lpToken + " "
          + (data?.ammID || id)
        }
      />
      <SearchBlock tab="amm" />
      <div className="content-center short-top amm">
        {errorMessage ?
          <div className='center orange bold'>{errorMessage}</div>
          :
          <>
            {data.ammID &&
              <div className="column-right">
                <table className='table-details'>
                  <thead>
                    <tr>
                      <th colSpan="100">
                        Automated market maker pool
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AMM ID</td>
                      <td>{shortHash(data.ammID, 10)} <CopyButton text={data.ammID} /></td>
                    </tr>
                    {trWithAccount(data, 'account', t("table.address"))}
                    <tr>
                      <td>Asset 1</td>
                      <td>
                        {amountFormat(data.amount)}
                        {data.amountIssuerDetails &&
                          <>
                            {" "}
                            ({addressUsernameOrServiceLink(
                              {
                                issuer: data.amount.issuer,
                                issuerDetails: data.amountIssuerDetails
                              },
                              'issuer'
                            )})
                          </>
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Asset 2</td>
                      <td>
                        {amountFormat(data.amount2)}
                        {data.amount2IssuerDetails &&
                          <>
                            {" "}
                            ({addressUsernameOrServiceLink(
                              {
                                issuer: data.amount2.issuer,
                                issuerDetails: data.amount2IssuerDetails
                              },
                              'issuer'
                            )})
                          </>
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Trading fee</td>
                      <td>
                        {showPercents(data.tradingFee)}
                      </td>
                    </tr>
                    <tr>
                      <td>Balance</td>
                      <td>
                        {fullNiceNumber(data.lpTokenBalance.value)}
                        {" " + lpToken}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {data?.auctionSlot &&
                  <table className='table-details'>
                    <thead>
                      <tr><th colSpan="100">Auction slot</th></tr>
                    </thead>
                    <tbody>
                      {trWithAccount(data.auctionSlot, 'account', t("table.owner"))}
                      {/* plus 4 more authorized accounts, AuthAccounts */}
                      <tr>
                        <td>Discounted fee</td>
                        <td>
                          {showPercents(data.auctionSlot.discountedFee)}
                        </td>
                      </tr>
                      <tr>
                        <td>Price</td>
                        <td>
                          {data.auctionSlot.price.value}
                          {" " + lpToken + " "}
                          {/*
                          ({addressUsernameOrServiceLink(
                            {
                              issuer: data.auctionSlot.price.issuer,
                              issuerDetails: data.auctionSlot.priceIssuerDetails
                            },
                            'issuer'
                          )})
                          */}
                        </td>
                      </tr>
                      <tr>
                        <td>Expiration</td>
                        <td>
                          {isMounted ?
                            fullDateAndTime(data.auctionSlot.expiration, 'ripple')
                            :
                            ""
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                }

                {data?.voteSlots?.length > 0 &&
                  <table className='table-details'>
                    <thead>
                      <tr><th colSpan="100">Vote slots</th></tr>
                    </thead>
                    <tbody>
                      {data.voteSlots.map((slot, i) => (
                        <React.Fragment key={i}>
                          {trWithAccount(slot, 'account', "Voter")}
                          <tr>
                            <td>Trading fee</td>
                            <td>{showPercents(slot.tradingFee)}</td>
                          </tr>
                          <tr>
                            <td>Vote weight</td>
                            <td>{showPercents(slot.voteWeight)}</td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                }
              </div>
            }
          </>
        }
      </div>
    </>
  )
}
