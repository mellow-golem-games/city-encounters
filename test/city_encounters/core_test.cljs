(ns city-encounters.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [city-encounters.core :as core]))

(deftest fake-test
  (testing "fake description"
    (is (= 1 2))))
