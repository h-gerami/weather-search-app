import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {update_wallet, get_currency_rate, set_err} from '../../Redux/Actions';
export interface MarketCapType {
  id: string;
  title: string;
  total: string;
  icon: string;
}

export interface HomePageType {
  update_wallet: (wallet: walletType) => void;
  wallet: walletType;
  loading: boolean;
  err: string;
  rates: object | any;
  get_currency_rate: (base: string) => void;
  set_err: (v: string) => void;
}

export enum Cnames {
  EUR = 'EUR',
  USD = 'USD',
  GBP = 'GBP',
}
export const cc: {[key: string]: Cnames} = Cnames;

function Home(props: HomePageType) {
  const {err, rates, get_currency_rate, wallet, set_err} = props;

  return <Text>asd</Text>;
}

// Redux
const mapStateToProps = (state: {
  CurrencyReducer: {
    wallet: walletType;
    loading: boolean;
    err: string;
    rates: object;
  };
}) => {
  const {wallet, loading, err, rates} = state.CurrencyReducer;
  return {
    wallet,
    loading,
    err,
    rates,
  };
};
const mapDispatchToProps = {
  update_wallet,
  get_currency_rate,
  set_err,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
