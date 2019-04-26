import 'Src/models/stores'
import express from 'express'
import controllers from 'Src/controllers/stores/store_controllers'

const router = express.Router()

router.get('/', controllers.storeList)
router.get('/:name', controllers.storeDetail)

export default router
