/*
*	Dependancies
*/
let bcrypt = require('bcrypt')

let DEFAULT_SALT_ROUNDS = 10
let MINIMUM_ALLOWED_SALT_ROUNDS = 6
let SALT_ROUNDS_ERROR = `A minimum of ${ MINIMUM_ALLOWED_SALT_ROUNDS } salt rounds is required to encrypt a password. Setting it to ${ DEFAULT_SALT_ROUNDS }. https://security.stackexchange.com/questions/17207/recommended-of-rounds-for-bcrypt`

/*
|-----------------------------------------------------------------
|	Password Module
|-----------------------------------------------------------------
|
|	The password module allows the encryption and decrypttion of
|	passwords easily without having to understand encryption and/or
| 	security.
|
*/
class Passwords {
	/*
	*	Constructor
	*
	*	@summary - none
	*	@return none
	*/
	constructor() {
		this.rounds = options.rounds || DEFAULT_SALT_ROUNDS
		if (this.rounds < MINIMUM_ALLOWED_SALT_ROUNDS) {
			this.rounds = MINIMUM_ALLOWED_SALT_ROUNDS
		}
		this.salt = bcrypt.genSaltSync(this.rounds)
	}

	/*
	*	Static - Encrypt
	*
	*	@param pwd String
	*	@param rounds Int
	*	@return promise Promise
	*/
	static encrypt(pwd,rounds = DEFAULT_SALT_ROUNDS) {
		if (rounds < MINIMUM_ALLOWED_SALT_ROUNDS) {
			rounds = MINIMUM_ALLOWED_SALT_ROUNDS
		}
		let salt = bcrypt.genSaltSync(rounds || DEFAULT_SALT_ROUNDS)
		return bcrypt.hash(pwd,salt)
	}

	/*
	*	Static - Encrypt
	*
	*	@param pwd String
	*	@param hash String
	*	@return isValid Bool
	*/
	static compare(pwd,hash) {
		return bcrypt.compare(pwd,hash)
	}

	/*
	*	Encrypt
	*
	*	@summary - see above Password.encrypt
	*/
	encrypt(pwd,rounds = DEFAULT_SALT_ROUNDS) {
		return bcrypt.hash(pwd,this.salt)
	}

	/*
	*	Compare
	*
	*	@summary - see above Password.compare
	*/
	compare(pwd,hash) {
		return bcrypt.compare(pwd,hash)
	}

}

module.exports = Passwords