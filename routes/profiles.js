import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/location', checkAuth, profilesCtrl.getLocation)
router.put('/:id', checkAuth, profilesCtrl.getLocation)

export { router }
