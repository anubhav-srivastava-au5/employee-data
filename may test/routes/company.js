const express= require('express');
const router = express.Router();
const CmpController = require('../controllers/company')
const auth = require('../middlewares/authenticate');

router.get('/',CmpController.all_cmp);

router.post('/createCmp',auth,CmpController.create_cmp);

router.get('/get_a_cmp/:cmpId',CmpController.get_a_cmp);


module.exports = router;