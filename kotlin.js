
private fun encryptPan(pan: String, publicKey: String?): String? {
       val keyFac = KeyFactory.getInstance("RSA")
       val keySpec = X509EncodedKeySpec(Base64.decode(publicKey?.trim(), Base64.NO_WRAP))
       val publicKey = keyFac.generatePublic(keySpec)

       val cipher = Cipher.getInstance("RSA/ECB/OAEPWITHSHA-256ANDMGF1PADDING")
       cipher.init(Cipher.ENCRYPT_MODE, publicKey);
       val doFinal = cipher.doFinal(pan.toByteArray())
       return 	(doFinal, Base64.NO_WRAP)
   }
