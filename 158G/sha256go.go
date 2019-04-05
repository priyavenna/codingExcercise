package main

import (
	"crypto/sha256"
	"fmt"
	"io/ioutil"
)

func main() {

		data, err := ioutil.ReadFile("test.txt")
		if err != nil {
			fmt.Println("File reading error", err)
			return
		}
		fmt.Println("Contents of file:", string(data))
	


	hash := sha256.New()
	hash.Write([]byte("hello world\n"))
	fmt.Printf("%x", hash.Sum(nil))
}