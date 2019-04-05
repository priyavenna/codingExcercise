package main

import (
"encoding/json"
"fmt"
"io/ioutil"
)

func main() {
readcontent, _ := ioutil.ReadFile("test.json")
var data map[string]interface{}
_ = json.Unmarshal(readcontent, &data)
fmt.Println(data["id"])
fmt.Println(data)
}