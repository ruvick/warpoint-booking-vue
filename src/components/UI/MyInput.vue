<template>

	<input type="text" class="input">
	
</template>

<script>

	export default {
		name: 'my-input'
	}

</script>

<style lang="scss" scoped> 

	input[type=range] {
		cursor: pointer;
	}

	input[type="text"],
	input[type="email"],
	input[type="tel"],
	textarea {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		&:focus {
			outline: none;
		}
	}

	.input {
		display: flex;
		width: 100%;
		height: 30px;
		padding: 0px 15px;
		border-radius: 5px;
		border: 1px solid #000;

		&._focus {
			background: grey;
		}

		&._error {
			border: 1px solid red;
		}
	}

	textarea.input {
		resize: none;
		padding: 5px 10px;
	}

	// Стилизация placeholder 
	::-webkit-input-placeholder {
		color: #8584847a;
	}

	::-moz-placeholder {
		color: #8584847a;
	}

	/* Firefox 19+ */
	:-moz-placeholder {
		color: #8584847a;
	}

	/* Firefox 18- */
	:-ms-input-placeholder {
		color: #8584847a;
	}

	// Убираем стрелки у цифрового инпута
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		/* display: none; <- Crashes Chrome on hover */
		-webkit-appearance: none;
		margin: 0;
		/* <-- Apparently some margin are still there even though it's hidden */
	}

</style>