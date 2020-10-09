import { takeEvery, put, all, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import {
  FETCH_BANNER
} from './instance'
import{
  change_banner
} from './actionCreators'

function* fetchBanner(action){
  const res = yield axios.get("http://123.207.32.32:8000//home/multidata")
  console.log(res);
  const banners = res.data.data.banner.list;
  console.log(banners);
  // yield put(change_banner(banners))
  yield all([
    yield put(change_banner(banners))
  ])
}

function* mySaga(){

  // yield takeEvery(FETCH_BANNER, fetchBanner);
  yield all([
    yield takeLatest(FETCH_BANNER, fetchBanner)
  ])
}

export default mySaga;