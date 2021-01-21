[遺失物掛失系統Lost And Found](http://34.66.178.39/admin/home)
===
### 介紹：
用APP或網頁方式塑造一個平台將遺失物的資訊呈現在上方，資訊包含:地點、物體外觀，將這些預定義的資訊傳到後端，再利用AI去判斷相關程度，呈現給遺失者最相關的資訊，增加找到的機率。

### Templates
* 前端
[Ant design](https://ant.design/docs/react/introduce)
[bootswatch](https://bootswatch.com/)
[Start bootstrap](http://startbootstrap.com/)
[Material.UI](https://material-ui.com/zh/)

[109-1] Web Programming Final
(Group 61)Lost And Found

Deployed 連結 (如有自己有安全性的疑慮，則可以不用在 FB 社團公告此項)
Demo 影片連結:
描述這個服務在做什麼
    我們實做了一個遺失物掛失系統，任何人都可以在上面查看有什麼近期被拾獲的物品，也可以填寫表單來掛失物品，也可以透過我們登入後的站內信功能來聯絡失主（或拾有者）
    
使用/操作方式 (含伺服器端以及使用者端)
    使用者可以藉由填寫表單來發布遺失或拾獲的資訊，同時也可以藉由站內信來聯絡。
    
(Optional, 如果願意開源) Github link
其他說明

### 使用與參考之框架/模組/原始碼
    Frontend:
    ├──React
    ├──Apollo
    ├──Material-ui
    ├──Material-ui: material-dashboard-react
    Backend:
    ├──Graphql-yoga
    ├──Mongoose
    ├──Node.js
    ├──nodemon
    ├──babel
    Database:
    ├──MongoDB
    
        
專題製作心得
    這次的專題在時間處理上吃了很大的虧，在deploy跟github多人合作上也嘗到蠻多苦頭的，比起一個人工作，多人工作顯然更考驗溝通與協調的能力，如何分配工作也是一大挑戰，藉由這次project學到了十分寶貴的經驗。
    

使用之第三方套件、框架、程式碼
參考程式碼：https://demos.creative-tim.com/material-dashboard-react/#/admin/dashboard


## Project Functions


### 首頁-遺失物陳列區 Home
    分成近期尋獲Recently Found 和 近期遺失Recently Found
    簡單列出遺失物資訊，點選後跳至Found Items或Lost Items欄位
    

### **撿到Found ＆ 遺失Lost**
    1.建構表單(尋獲位址、物品現在位址等)供人填表，資訊傳到後端。
    2.上傳照片。
    3.站內信功能以供拾獲者、遺失者聯絡。

    
### 擴充功能（未來構想）
    發佈APP應用
    提供各類搜尋功能
    連線到相機、GPS、其他的API（ex:google map)
    提供圖片打碼功能（EX:學生證）
    驗證信

### **登入介面 Account**
    發送跟接收站內信、登入才能發布訊息。
---
## DataBase Details
### Schema
    ├──LostItems/
        ├──id/ID
        ├──name/string
        ├──lostLocation/string
        ├──rewards/string
        ├──descriptions/string
        ├──image/string
        ├──lostTime/String
        ├──loster/String
        ├──isFound/Boolen
    ├──foundItems/
        ├──id/ID
        ├──name/String
        ├──foundLocation/String
        ├──currentLocation/String
        ├──descriptions/String
        ├──image/String
        ├──foundTime/String
        ├──founder/String
        ├──isReturned/Boolen
    ├──User/
        ├──username/String
        ├──password/String
        ├──email/String
        ├──lostItems/LostItem
        ├──foundItems/FoundItem
        ├──letters/Message
    ├──Message/
        ├──from/String
        ├──to/String
        ├──body/String
    



### RoadMap

- [x] 撿到
    - [x] 撿到的表單
    - [x] 資料傳到後端
    - [x] 後端傳到DB
- [x] 陳列
    - [x] 資料傳到後端
    - [x] 後端把資訊傳回前端供使用者閱覽
- [x] 帳號管理
- [x] 站內信
    - [x] 發送request到DB，插入到DB
    - [x] 從DB提取messages
- [x] 前後端溝通，連DB
- [ ] 剩下待做
    - [ ] 帳號加密
    - [ ] 搜尋優化
        
    
 
### 分工
    楊學翰
        負責前後端溝通、前端LostItem, FoundItem, Home之狀態維護，以及其陳列。
    陳亮君
        負責帳號功能、尋獲／遺失物品表單建置，與網站deployment。
    吳東昱
        負責資料庫建置、尋獲／遺失物品表單建置、image uploader。
### 初步發想
![](https://i.imgur.com/eeSBrwT.jpg)
