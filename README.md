# 自动化测试框架

[TOC]

## 1.  概述

> 本项目为 galen 自动化测试项目，包含自动化测试框架的选型以及所有的自动化测试用例
测试逻辑



## 2. 项目结构&命名规范

```shell
├── README.MD							# README
├── specs		                             
│   ├── data                            # specs中所用到的数据
│   ├── galen-extras					# 提供的额外方法
│   └── properties                      # 配置文件，与卡片工程的配置文件一一对应（用于测不同）
├── tests								# 测试执行文件夹
│   ├── common-js                       # 存放公用js
│   │   ├── commons.js                  # 流程化操作的公共方法
│   │   └── init.js                     # 初始化文件：用户，url，以及执行设备（含本地，browserstack与saucelabs）
│   ├── galen-bootstrap                 # 提供执行用例的方法（单个设备执行，多设备执行等等）
│   └── test-js                         # 测试用例执行（按页面分）
├── browserstack-devices.json           # browserstack的json配置文件，配置执行设备型号，及window大小等数据
├── saucelabs-devices.json				# saucelabs的json配置文件，配置执行设备型号，及window大小等数据
├── galen.config						# 配置执行webdriver等信息
└── run.sh                              # 批量执行脚本，并生成报告
```


### 2.1 基本语法介绍
#### 2.1.1 Galen Specs Language Guide
Galen Specs Language非常灵活，让您有机会准确表达您的网站在不同设备上的行为方式。页面规范文件中有两个主要部分：对象定义和对象规范。
[参考url](http://galenframework.com/docs/reference-galen-spec-language-guide/)

#### 2.1.2 Galen Test Suite Syntax
为了给用户提供更多的灵活性和可维护性，Galen想出了另一种用于定义测试套件的简单格式。测试套件只是一组需要使用适当的测试规范进行检查的页面。
[参考url](http://galenframework.com/docs/reference-galen-test-suite-syntax/)

## 3. Galen 框架安装

### 3.1 安装galenframework

```shell
执行：
sudo npm install -g galenframework-cli
```


### 3.2 设置Configuration文件

```shell
# 建议在工程根目录下创建config文件
# 命令行输入：
galen config
```
[参考url](http://galenframework.com/docs/getting-started-configuration/)



### 3.3 语法高亮插件

#### IDE Support
- [Intellij](https://plugins.jetbrains.com/plugin/8302-galen-specs-language-support)
- [Sublime](https://github.com/davidrv87/syntax-sublime-galen2)
- [Vim](https://github.com/galenframework/galen.vim)
- [VS Code](https://marketplace.visualstudio.com/items?itemName=simonhdickson.galen)

### 3.4 用例执行

```bash
galen test mytest01.test
    --htmlreport "htmlreport-dir"
    --testngreport "report/testng.xml"
    --jsonreport "jsonreport-dir"
    --junitreport "junit-report.xml"
    --parallel-tests 4
    --config "path/to/galen.config"
```
#### Command line arguments:

- htmlreport - path to folder in which Galen should generate HTML reports
- testngreport - path to xml file in which Galen should write TestNG report
- junitreport - path to junit xml report file
- parallel-tests - amount of threads for running tests in parallel
- recursive - flag which is used in case you want to search for all .test files recursively in folder
- filter - a filter for a test name
- config - path to config file

[参考url](http://galenframework.com/docs/reference-working-in-command-line/)


## 4. 用例规范说明

```bash
按卡片的维度写spec，一张卡片包含三个必要的文件'specs/data/*.gspec','specs/properties/*.properties.js','specs/*.gspec'
- specs/data/*.gspec : 卡片的数据，定位符，自定义变量等
- specs/properties/*.properties.js : 卡片的配置项文件，此文件与开发的卡片配置文件一一对应 
- specs/data/*.gspec : 卡片的gspec测试语句
```


## 5. 运行测试用例

### 5.1 命令行运行测试用例

```bash
galen test tests/ --htmlreport reports
```

### 5.2 用例执行流程
1. 执行tests中所有用例
2. *.test.js文件，加载commons.js与init.js(init.js注册执行设备)，并执行suite