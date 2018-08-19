---
layout:         post
title:          Elasticsearch
subtitle:       Elasticsearch基本原理
card-image:     https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535023062&di=8f3fc8a1456a878549e4384d60a6c626&imgtype=jpg&er=1&src=http%3A%2F%2Fjbcdn2.b0.upaiyun.com%2F2017%2F10%2Fc6cf4b2000277c64f55e00cf6d2f294f.png
date:           2018-08-16 19:30:00
tags:           big data
post-card-type: image
---

### 1.Elasticsearch简介

ElasticSearch是一个基于Lucene的搜索服务器。它提供了一个分布式多用户能力的全文搜索引擎，基于RESTful web接口。


### 2.Lucene简介
  
    1.一种基于Java的开放源代码的全文检索引擎工具包 ，提供了完整的查询引擎和索引引擎以及部分文本分析引擎。
    2.是通过特定的倒排索引方式实现全文检索，并且Lucene提供了通用的API接口，使得用户可以方便地定制应用。
    
##### 1.Lucene索引
Lucene在扩展索引的时候不断创建新的索引文件，而不是像其它大部分搜索引擎一样维护一个索引文件，并且定期地把这些新的小索引合并到原先的大索引中。

##### 1.Lucene处理Demo

![MacDown Screenshot](/assets/images/Lucene1.png)

![MacDown Screenshot](/assets/images/Lucene2.png)


### 3.Elasticsearch存储

为了将数据添加到Elasticsearch，我们需要索引—存储关联数据的地方。




### 4.Elasticsearch分词

为了完成此类full-text域的搜索，ES必须首先分析文本并将其构建成为倒排索引(inverted index)。倒排索引由各文档中出现的单词列表组成，列表中的各单词不能重复且需要指向其所在的各文档。

