import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 3NPLpyTpEuYd2T_50nbxVDtA96wFnE2LQEmnOtnPMVxqwxOWuiM0coiRZKDllmFvPhHL1YfdKocE2tA4p2tNArAJzwVQcM5GA6VWGtMx4-r_mWqETdmEcTSfiFxUXnYx'
  },
});
